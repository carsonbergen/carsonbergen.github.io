import Warning from "../components/Warning";

function GameDevCorner() {
  return(
    <>
      <div>
        <div className="flex flex-col space-y-4 items-center">
            <Warning warning="Under construction! Come back later."/>
            <h1 className="gameDevHeader">Carson's Cool Game Development Corner</h1>
        </div>
      </div>
    </>
  );
}

export default GameDevCorner;