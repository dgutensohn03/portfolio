QUnit.test("newEntry should create a new table with correct class names and content", function(assert) {
	// Arrange
	var TeamList = [
		{
			FirstName: "John",
			LastName: "Doe",
			Email: "john.doe@example.com",
			Address_1: "123 Main St",
			City: "New York",
			State: "NY",
			PostalCode: "10001",
			RegionProvince: "Region",
			Country: "USA",
			ClassHD: true,
			ClassHDDate: "2022-01-01",
			ClassLD: false,
			ClassVPS: true,
			ClassVPSDate: "2022-02-01"
		},
		{
			FirstName: "Jane",
			LastName: "Smith",
			Email: "jane.smith@example.com",
			Address_1: "456 Elm St",
			City: "Los Angeles",
			State: "CA",
			PostalCode: "90001",
			RegionProvince: "Province",
			Country: "Canada",
			ClassHD: false,
			ClassLD: true,
			ClassLDDate: "2022-03-01",
			ClassVPS: false
		}
	];

	var matchedArray = [1, 2];

	var expectedTable1 = '<table class="newUser_1 table table-borderless table_LG">...</table>';
	var expectedTable2 = '<table class="newUser_2 table table-borderless">...</table>';

	var newTableStub = sinon.stub(document, "createElement");
	newTableStub.withArgs("table").returns(document.createElement("table"));

	var appendChildStub = sinon.stub(document.getElementById("teamList_Body1"), "appendChild");

	// Act
	newEntry(TeamList, matchedArray);

	// Assert
	assert.equal(appendChildStub.callCount, 2, "Two tables should be appended");
	assert.equal(appendChildStub.getCall(0).args[0].outerHTML, expectedTable1, "First table should have correct class names and content");
	assert.equal(appendChildStub.getCall(1).args[0].outerHTML, expectedTable2, "Second table should have correct class names and content");

	// Restore stubs
	newTableStub.restore();
	appendChildStub.restore();
});