export default function SearchForm() {
  function handleSubmit(e) {
    e.preventDefault();

    const searchValue = e.target.elements.search.value;

    if (!searchValue) return;

    console.log("no search value");
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
