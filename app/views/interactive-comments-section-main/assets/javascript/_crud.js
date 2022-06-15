let currentDeleteID = null;
const modalTag = document.getElementById("modal-alert");

// fonction qui ouvre le modal
const handleDeleteClick = (id) => {
	currentDeleteID = id;
	modalTag.classList.add("show");
};