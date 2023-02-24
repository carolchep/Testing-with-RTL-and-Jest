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

      <input data-testid="required-input" required />
      <input data-testid="aria-required-input" aria-required="true" />
      <input data-testid="conflicted-input" required aria-required="false" />
      <input data-testid="aria-not-required-input" aria-required="false" />
      <input data-testid="optional-input" />
      <input data-testid="unsupported-type" type="image" required />
      <select data-testid="select" required></select>
      <textarea data-testid="textarea" required></textarea>
      {/* <div data-testid="supported-role" role="tree" required></div> */}
      <div data-testid="supported-role-aria" role="tree" aria-required="true"></div>

      {/* <div data-testid="zero-opacity" style="opacity: 0">Zero Opacity Example</div> */}
      {/* <div data-testid="visibility-hidden" style="visibility: hidden">
        Visibility Hidden Example
      </div> */}
      {/* <div data-testid="display-none" style="display: none">Display None Example</div>
      <div style="opacity: 0">
        <span data-testid="hidden-parent">Hidden Parent Example</span>
      </div> */}
      <div data-testid="visible">Visible Example</div>
      <div data-testid="hidden-attribute" hidden>Hidden Attribute Example</div>
      <details>
        <summary>Title of hidden text</summary>
        Hidden Details Example
      </details>
      <details open>
        <summary>Title of visible text</summary>
        <div>Visible Details Example</div>
      </details>
      <button data-testid="ok-button" type="submit" disabled>ok</button>

      <button data-testid="delete-button" className="btn extra btn-danger">
        Delete item
      </button>
      <button data-testid="no-classes">No Classes</button>
    </>
  )
}