class Pagination {
    previousPage : number | null;
    currentPage: number | null;
    nextPage: number | null;
    count: number;
    lastPage: number;
    constructor(previousPage: number | null, currentPage: number | null, nextPage: number | null, count: number, lastPage: number) {
        this.previousPage = previousPage;
        this.currentPage = currentPage;
        this.nextPage = nextPage;
        this.count = count;
        this.lastPage = lastPage;
    }
}

export default Pagination;