import React from "react";

function History({ histories }) {
  return (
    <div className="history">
      <div className="history__title">History</div>
      <table className="history__table">
        {histories.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </table>
    </div>
  );
}

export default History;
