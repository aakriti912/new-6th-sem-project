import Card from "../Reuseable/Card";
import CardInfo from "../Reuseable/CardInfo";
// DocInfot to Cardinfo
import NoteData from "../NoteInformation/Note.json";
import { useState } from "react";

const NoteCard = () => {
  return (
    <div className="Container m-6">
      <div class="grid grid-cols-4 gap-4">
        {NoteData.map((ele) => {
          return <Card data={ele} />;
        })}
      </div>
    </div>
  );
};

export default NoteCard;
