/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import withContainer from "../components/withContainer.tsx";
import { useEffect, useState } from "preact/hooks";
import { getRegistryRows, getUser } from "../utils/postgres.ts";
import {
  HandlerContext,
  PageProps,
} from "https://deno.land/x/fresh@1.0.2/server.ts";

type RowData = {
  id: string;
  name: string;
};

const Row = ({ row }: { row: RowData }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <b>{row.id}</b>
      <i>{row.name}</i>
    </div>
  );
};

export const handler = async (req: Request, ctx: HandlerContext) => {
  if (req.method === "GET") {
    const [rows, user] = await Promise.all([getRegistryRows(), getUser(req)]);
    return ctx.render({ user, rows });
  }
};

const Registry = ({ data }: PageProps<{ rows: RowData[] }>) => {
  return (
    <Fragment>
      <p class={tw`my-6`}>
        registry items
      </p>
      {data.rows ? data.rows.map((x) => <Row row={x} key={x.id} />) : null}
    </Fragment>
  );
};

export default withContainer(Registry);
