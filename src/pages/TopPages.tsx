import Header from "../components/Header";
import Results from "../components/Results";
import Selector from "../components/Selector";
import Title from "../components/Title";
import { TopPageType } from "../types";

const TopPage = ({
  countriesJson,
  setCountry,
  countryData,
  loading,
}: TopPageType) => {
  return (
    <div className="top-page-container">
      <div>
        <Header></Header>
        <Title></Title>
        <Selector
          countriesJson={countriesJson}
          setCountry={setCountry}
        ></Selector>
        <Results countryData={countryData} loading={loading}></Results>
      </div>
    </div>
  );
};

export default TopPage;
