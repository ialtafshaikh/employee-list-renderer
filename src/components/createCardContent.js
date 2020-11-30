const createCardContent = (employee) => {
  const div = document.createElement("div");
  div.classList.add("card-content");
  const empNamepara = employeeNamePara(employee);
  const linkPara = createLink(
    empNamepara,
    "",
    employee.profileUrl,
    "profile-link"
  );
  const company = createPara(employee.company, "company");

  div.appendChild(linkPara);
  div.appendChild(company);

  return div;
};