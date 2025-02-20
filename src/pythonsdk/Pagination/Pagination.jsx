import CodeBlock from "../../common/CodeBlock";


const Pagination = () => {
  return (
    <div className="p-6 bg-white min-h-screen text-black">
      <h1 className="text-5xl font-bold mb-6">Pagination</h1>
      <p className="text-black-400 mb-6 text-black">
        When invoking the <span className="font-semibold">list()</span> method
        on a resource, you will receive a pagination object that contains the
        first page of results. You can then use the{" "}
        <span className="font-semibold ">next()</span> and{" "}
        <span className="font-semibold">previous()</span> methods to navigate
        through the pages. There are two types of pagination objects:{" "}
        <span className="font-semibold">PagePaginatedResource</span> and{" "}
        <span className="font-semibold">CursorPaginatedResource</span>.
      </p>

      {/* PagePaginatedResource */}
      <div className="mb-8 text-black ">
        <h2 className="text-3xl font-bold mb-4">PagePaginatedResource</h2>
        <p className="  mb-4 text-black">
          This type of pagination is used for resources that are not frequently
          created and deleted, such as{" "}
          <span className="font-semibold">Agent</span>.
        </p>

        <CodeBlock
          content={`class PagePaginatedResource:
    """A paginated resource that uses page-based pagination."""
    
    total_count: int
    current_page: int
    results: List
    
    def next(self) -> Optional[PagePaginatedResource]:
        """Returns the next page of results, or None if there is no next page."""
    
    def previous(self) -> Optional[PagePaginatedResource]:
        """Returns the previous page of results, or None if there is no previous page."""
        
agents = swarmnode.Agent.list()
next_page_agents = agents.next()`}
        />
      </div>

      {/* CursorPaginatedResource */}
      <div>
        <h2 className="text-3xl font-bold mb-4 text-black">CursorPaginatedResource</h2>
        <p className="text-gray-400 mb-4 text-black">
        This type of pagination is used for resources that are frequently created and deleted, such as Execution. Cursor pagination ensures that users will not see the same item more than once, even if new data is added or existing data is modified during pagination.
         </p>
        <CodeBlock
          content={`class CursorPaginatedResource:
    """A paginated resource that uses cursor-based pagination."""

    results: List

    def next(self) -> Optional[CursorPaginatedResource]:
        """Returns the next page of results, or None if there is no next page."""

    def previous(self) -> Optional[CursorPaginatedResource]:
        """Returns the previous page of results, or None if there is no previous page."""

# Example:
executions = swarmnode.Execution.list()
next_page_executions = executions.next()`}
        />
      </div>
    </div>
  );
};

export default Pagination;
