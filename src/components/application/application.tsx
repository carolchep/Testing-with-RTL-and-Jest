export const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <img src="https://via.placeholder.com/150" alt="a person with a laptop" />
      <div data-testid="custom-element">Custom HTML element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Fullname"
            value="Carol"
            onChange={() => { }}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button disabled>Submit</button>

      </form>
      <fieldset disabled><input type="text" data-testid="input" /></fieldset>
      {/* <a href="www.kkkd.com" disabled>link</a> */}
      <span data-testid="not-empty"><span data-testid="empty"></span></span>
      <span data-testid="with-whitespace"> </span>
      <span data-testid="with-comment">
        {/* comment  */}
      </span>
      <input data-testid="no-aria-invalid" />
      <input data-testid="aria-invalid" aria-invalid />
      <input data-testid="aria-invalid-value" aria-invalid="true" />
      <input data-testid="aria-invalid-false" aria-invalid="false" />

      <form data-testid="valid-form">
        <input />
      </form>

      <form data-testid="invalid-form">
        <input required />
      </form>
    </>
  )
}