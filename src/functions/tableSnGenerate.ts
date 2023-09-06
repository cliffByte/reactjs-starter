export default (start: number, currentPage: number, perPage: number) => {
  return start + 1 + (currentPage - 1) * perPage
}
