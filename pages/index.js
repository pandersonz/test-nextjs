import Box from "./component/Box";
export default function Home() {
  return (
    <div className="content-center flex w-full">
      <div className="w-1/2 mx-auto mt-8">
        <h2 className="font-bold text-center text-lg">Your Plans</h2>
        <p className="text-center">
          <a href="">Coverage starting 2022</a> in <a href="">91356</a> for{" "}
          <a href="">me</a>
        </p>
        <Box />
      </div>
    </div>
  );
}
