import { r as registerInstance, a as createEvent, h } from './index-e4ed47bf.js';

const guestDetailsCss = "";

const GuestDetails = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.formDataSubmitted = createEvent(this, "formDataSubmitted", 7);
    this.opened = undefined;
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.alternateemail = '';
    this.password = '';
    this.country = '';
    this.city = '';
    this.adress = '';
    this.countrycode = '';
    this.mobilenumber = '';
    this.newsletter = false;
    this.formSubmitted = false;
    this.showFormError = false;
  }
  handleCheckboxChange(event) {
    const checkbox = event.target;
    this.newsletter = checkbox.checked;
  }
  async handleSubmit(event) {
    event.preventDefault();
    const formData = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      alternateemail: this.alternateemail,
      password: this.password,
      country: this.country,
      city: this.city,
      adress: this.adress,
      countrycode: this.countrycode,
      mobilenumber: this.mobilenumber,
      newsletter: this.newsletter,
    };
    //Emit the form data through the custom event
    this.formDataSubmitted.emit(formData);
    console.log(formData);
  }
  saveGuestDetailsClick(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Check if any required fields are empty
    if (this.firstname === '' || this.lastname === '' || this.email === '' || this.password === '' || this.country === '' || this.countrycode === '' || this.mobilenumber === '') {
      // Show the error message when the "Save" button is clicked and required fields are empty
      this.showFormError = true;
      console.log('Error!');
    }
    else {
      // If all required fields are filled, perform form submission
      this.handleSubmit(event);
      console.log(event);
    }
  }
  render() {
    let mainContent = null;
    if (this.opened) {
      mainContent = (h("div", { id: "main-container" }, h("h3", null, "Guest Details"), h("div", { id: "form-container" }, h("div", null, h("form", { action: "" }, h("div", null, h("p", { id: "rg-date" }, "Registration date : ", h("span", { id: "a" }, "27-jul-2023"))), h("div", { class: "input-container" }, h("label", { htmlFor: "firstName" }, "First Name*"), h("input", { type: "text", id: "firstName", placeholder: "", value: this.firstname, onChange: (event) => this.firstname = event.target.value })), h("div", { class: "input-container" }, h("label", { htmlFor: "lastname" }, "Last Name*"), h("input", { type: "text", id: "lastName", placeholder: "", value: this.lastname, onChange: (event) => this.lastname = event.target.value })), h("div", { class: "input-container" }, h("label", { htmlFor: "email" }, "Email*"), h("input", { type: "email", id: "email", placeholder: "", value: this.email, onChange: (event) => this.email = event.target.value })), h("div", { class: "input-container" }, h("label", { htmlFor: "email" }, "Alternate email"), h("input", { type: "email", id: "Alt-email", placeholder: "", value: this.alternateemail, onChange: (event) => this.alternateemail = event.target.value })), h("div", { class: "input-container" }, h("label", { htmlFor: "password" }, "Password*"), h("input", { type: "password", id: "password", placeholder: "", value: this.password, onChange: (event) => this.password = event.target.value })), h("div", { class: "input-container" }, h("label", { htmlFor: "country" }, "Country*"), h("select", { class: "country-dropdown", id: "country", onChange: (event) => this.country = event.target.value }, h("option", { value: "", disabled: true, selected: true }, "Select Your Country"), h("option", { value: "USA" }, "USA"), h("option", { value: "Canada" }, "Canada"))), h("div", { class: "input-container" }, h("label", { htmlFor: "city" }, "City"), h("input", { type: "text", id: "city", placeholder: "", value: this.city, onChange: (event) => this.city = event.target.value })), h("div", { class: "input-container" }, h("label", { id: "address-lable", htmlFor: "address" }, "Address"), h("textarea", { class: "", id: "address-textarea", rows: 2, placeholder: "", value: this.adress, onInput: (event) => (this.adress = event.target.value) })), h("div", { class: "input-container" }, h("label", { htmlFor: "countryCode" }, "Mobile"), h("select", { id: "countryCode", onChange: (event) => (this.countrycode = event.target.value) }, h("option", { value: "", disabled: true, selected: true }, "Code"), h("option", { value: "+1" }, "+1 (USA)"), h("option", { value: "+44" }, "+44 (UK)")), h("br", null)), h("div", { class: "" }, h("input", { type: "tel", id: "mobileNumber", placeholder: "", value: this.mobilenumber, onChange: (event) => this.mobilenumber = event.target.value })), h("div", { class: "checkbox" }, h("input", { type: "checkbox", id: "termsCheckbox", name: "termsCheckbox", onChange: (event) => this.handleCheckboxChange(event) }), h("label", { htmlFor: "termsCheckbox" }, "Newsletter")), h("div", null, h("span", null, "Last used :"), h("span", null, "Language: ", h("span", { id: "b" }, "EN")), h("span", null, "--- Currency: ", h("span", { id: "c" }, "\u20AC"))), h("div", { class: "line-separator" }), h("button", { type: "submit", class: "full-width-button", onClick: (event) => this.saveGuestDetailsClick(event) }, "Save"))))));
    }
    return (h("div", null, mainContent));
  }
};
GuestDetails.style = guestDetailsCss;

export { GuestDetails as jji_guest_details };

//# sourceMappingURL=jji-guest-details.entry.js.map