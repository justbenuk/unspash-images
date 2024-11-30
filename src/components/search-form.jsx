import { useGlobalContext } from "../context/context";

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext();

  function handleSubmit(e) {
    e.preventDefault();

    const searchValue = e.target.elements.search.value;

    if (!searchValue) return;
    setSearchTerm(searchValue);
  }
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          name="search"
          placeholder="cat"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
}
