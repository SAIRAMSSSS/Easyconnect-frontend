import SearchBar from "./components/SearchBar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <SearchBar />
      <Homepage />
      <Footer />
    </div>
  );
}
