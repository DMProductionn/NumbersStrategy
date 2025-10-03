import { Chart } from "@/section/chart/Chart";
import { HowWorks } from "@/section/how_works/HowWorks";
import { Main } from "@/section/main/Main";
import { Market } from "@/section/market/Market";

export default function Home() {
  return (
    <>
      <Main />
      <HowWorks />
      <Chart />
      <Market />
    </>
  );
}
