/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import withContainer from "../components/withContainer.tsx";
import { useEffect, useState } from "preact/hooks";
import {
  connection,
  getUser,
  RegistryRow,
  UserRow,
} from "../utils/postgres.ts";
import {
  HandlerContext,
  PageProps,
} from "https://deno.land/x/fresh@1.0.2/server.ts";
import RegistryItem from "../islands/RegistryItem.tsx";

const getRegistryRows = async (): Promise<RegistryRow[]> => {
  const { rows } = await connection.queryObject`
    select ri.*, wu.id as user_id, wu.name as user_name, wu.email as email from registry_items ri left join wedding_user wu on ri.wedding_user_id = wu.id
  `;

  return (rows as any).map((r: any) => ({
    ...r,
    wedding_user: {
      user_id: r.user_id,
      name: r.user_name,
      email: r.email,
    },
  })) as RegistryRow[];
};

export const registerRow = async (user: UserRow): Promise<RegistryRow[]> => {
  console.log(`hiya`, user.user_id);
  const { rows } = await connection.queryObject`
    update registry_items set wedding_user_id = ${user.user_id}
  `;

  return rows as RegistryRow[];
};

export const handler = async (req: Request, ctx: HandlerContext) => {
  if (req.method === "GET") {
    const [rows, user] = await Promise.all([getRegistryRows(), getUser(req)]);
    return ctx.render({ user, rows });
  }
};

/*
create table registry_items ( id UUID NOT NULL DEFAULT uuid_generate_v4(),
  wedding_user_id UUID references wedding_user (id),
  name varchar,
  description varchar,
  link varchar,
  cost integer
);
*/

const Registry = (
  { data }: PageProps<{ rows: RegistryRow[]; user?: UserRow }>,
) => {
  return (
    <Fragment>
      <head>
        <style>
          {`
          .modal {
            display: block; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            padding-top: 100px; /* Location of the box */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
          }

          /* Modal Content */
          .modal-content {
            background-color: #fefefe;
            margin: auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
          }

          /* The Close Button */
          .close {
            color: #aaaaaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
          }

          .close:hover,
          .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
          }

          `}
        </style>
      </head>
      <p class={tw`my-6`}>
        registry items
      </p>
      {data.rows
        ? data.rows.map((x) => (
          <RegistryItem row={x} key={x.id} user={data.user} />
        ))
        : null}
    </Fragment>
  );
};

export default withContainer(Registry);
