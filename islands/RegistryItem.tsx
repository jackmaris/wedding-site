/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState } from "preact/hooks";

import { RegistryRow, UserRow } from "../utils/postgres.ts";

const RegistryItem = ({ row, user }: { row: RegistryRow; user?: UserRow }) => {
  const isUser = row.wedding_user?.user_id === user?.user_id;
  const isTaken = !!row.wedding_user?.user_id;

  const [modalVisible, setModalVisible] = useState(false);

  const register = async () => {
    const response = await fetch("/api/register_item", {
      method: "POST",
      mode: "same-origin", // no-cors, *cors, same-origin
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ item_id: row.id }), // body data type must match "Content-Type" header
    });
    return response.json();
  };

  console.log(`visible`, modalVisible);
  return (
    <div class={tw`bg-gray-300 my-4 p-2`}>
      {modalVisible && (
        <div id={`myModal`} class="modal">
          <div class="modal-content">
            <span
              class="close"
              onClick={() => {
                setModalVisible(false);
              }}
            >
              &times;
            </span>
            <p>
              I want to register to buy <b>{row.name}.</b>
            </p>
            <p>
              <button
                style={{ fontWeight: "bold" }}
                class={tw`hover:bg-blue-100 bg-green-300 px-2 rounded-md h-6`}
                onClick={register}
              >
                confirm
              </button>
            </p>
          </div>
        </div>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "6fr 7fr 1fr 4fr",
          width: "100%",
          columnGap: "10px",
        }}
      >
        <b>
          <a href={row.link} target="_blank">{row.name}</a>
        </b>
        <i>{row.description}</i>
        <i class={tw`text-green-700`}>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          })
            .format(row.cost / 100)}
        </i>
        <div style={{ "display": "flex", justifyContent: "space-between" }}>
          <button
            style={{ fontWeight: "bold" }}
            class={tw`${
              isTaken ? `bg-gray-300` : `bg-green-300`
            }  px-2 rounded-md h-6`}
          >
            {isTaken
              ? (isUser ? "Taken by you" : "Taken by someone else")
              : "available!"}
          </button>
          {!isTaken && (
            <button
              style={{ fontWeight: "bold" }}
              class={tw`hover:bg-blue-100 bg-green-300 px-2 rounded-md h-6`}
              onClick={() => {
                setModalVisible(true);
              }}
            >
              select
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistryItem;
