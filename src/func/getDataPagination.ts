const getDataPagination = (countPage: number, activePage: number) => {
  const data: number[] = [];

  if (countPage <= 3) {
    for (let i = 1; i <= countPage; i += 1) {
      data.push(i);
    }
  } else if (activePage === 1) {
    for (let i = 1; i <= 3; i += 1) {
      data.push(i);
    }
  } else if (activePage === countPage) {
    for (let i = countPage - 2; i <= countPage; i += 1) {
      data.push(i);
    }
  } else {
    for (let i = activePage - 1; i <= activePage + 1; i += 1) {
      data.push(i);
    }
  }

  return data;
};

export default getDataPagination;
