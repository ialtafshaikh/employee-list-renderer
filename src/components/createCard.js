const createCard = (employee) => {
  const div = document.createElement("div");
  div.classList.add("card");

  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card-wrapper");

  const profileImg = createProfileImg(employee.picUrl, employee.altDescp);
  const cardContent = createCardContent(employee);

  cardWrapper.appendChild(profileImg);
  cardWrapper.appendChild(cardContent);

  div.appendChild(cardWrapper);

  return div;
};
