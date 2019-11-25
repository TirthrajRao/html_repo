function formValidation()
{
	console.log("return function");
	var ProfileName = document.forms["information_form"]["ProfileName"];
	var FirstName = document.forms["information_form"]["FirstName"];
	var LastName = document.forms["information_form"]["LastName"];
	var Email = document.forms["information_form"]["Email"];
	var Phone = document.forms["information_form"]["Phone"];
	var AddressLine1 = document.forms["information_form"]["AddressLine1"];
	var Country = document.forms["information_form"]["Country"];
	var State = document.forms["information_form"]["State"];
	var City = document.forms["information_form"]["City"];
	var Zipcode = document.forms["information_form"]["Zipcode"];
	var CardNumber = document.forms["information_form"]["CardNumber"];
	var ExpiryMonth = document.forms["information_form"]["ExpiryMonth"];
	var ExpiryYear = document.forms["information_form"]["ExpiryYear"];
	var CVV = document.forms["information_form"]["CVV"];

	if (ProfileName.value == "")
	{
		$(ProfileName).addClass("notvalid").removeClass("valid");
	}else if(ProfileName.value !== ""){
		$(ProfileName).removeClass("notvalid").addClass("valid");
	}

	if (FirstName.value == "")
	{
		$(FirstName).addClass("notvalid").removeClass("valid");
	}else if(FirstName.value !== ""){
		$(FirstName).removeClass("notvalid").addClass("valid");
	}

	if (LastName.value == "")
	{
		$(LastName).addClass("notvalid").removeClass("valid");
	}else if(LastName.value !== ""){
		$(LastName).removeClass("notvalid").addClass("valid");
	}

	if (Email.value == "" && Email.value.indexOf("@", 0) < 0 && Email.value.indexOf(".", 0) < 0)
	{
		$(Email).addClass("notvalid").removeClass("valid");
	}else if(Email.value !== ""){
		$(Email).removeClass("notvalid").addClass("valid");
	}

	if (Phone.value == "")
	{
		$(Phone).addClass("notvalid").removeClass("valid");
	}else if(Phone.value !== ""){
		$(Phone).removeClass("notvalid").addClass("valid");
	}

	if (AddressLine1.value == "")
	{
		$(AddressLine1).addClass("notvalid").removeClass("valid");
	}else if(AddressLine1.value !== ""){
		$(AddressLine1).removeClass("notvalid").addClass("valid");
	}

	if (Country.value == "")
	{
		$(Country).addClass("notvalid").removeClass("valid");
	}else if(Country.value !== ""){
		$(Country).removeClass("notvalid").addClass("valid");
	}

	if (State.value == "")
	{
		$(State).addClass("notvalid").removeClass("valid");
	}else if(State.value !== ""){
		$(State).removeClass("notvalid").addClass("valid");
	}

	if (City.value == "")
	{
		$(City).addClass("notvalid").removeClass("valid");
	}else if(City.value !== ""){
		$(City).removeClass("notvalid").addClass("valid");
	}

	if (Zipcode.value == "")
	{
		$(Zipcode).addClass("notvalid").removeClass("valid");
	}else if(Zipcode.value !== ""){
		$(Zipcode).removeClass("notvalid").addClass("valid");
	}

	if (CardNumber.value == "")
	{
		$(CardNumber).addClass("notvalid").removeClass("valid");
	}else if(CardNumber.value !== ""){
		$(CardNumber).removeClass("notvalid").addClass("valid");
	}

	if (ExpiryMonth.value == "")
	{
		$(ExpiryMonth).addClass("notvalid").removeClass("valid");
	}else if(ExpiryMonth.value !== ""){
		$(ExpiryMonth).removeClass("notvalid").addClass("valid");
	}

	if (ExpiryYear.value == "")
	{
		$(ExpiryYear).addClass("notvalid").removeClass("valid");
	}else if(ExpiryYear.value !== ""){
		$(ExpiryYear).removeClass("notvalid").addClass("valid");
	}

	if (CVV.value == "")
	{
		$(CVV).addClass("notvalid").removeClass("valid");
	}else if(CVV.value !== ""){
		$(CVV).removeClass("notvalid").addClass("valid");
	}
	return true; 
}