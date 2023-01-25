import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CardSkeleton = () => {
  return (
    <>
      <Skeleton height={100} />
    </>
  );
};

export const CardsSkeleton = () => {
  return (
    <>
      {[1, 2].map((item) => {
        return (
          <div className="mt-5 row  ">
            {[1, 2].map((s) => {
              return (
                <div className="col-md-6 col-12 p-3">
                  <div className="card p-4">
                    <Skeleton
                      count={2}
                      width="75%"
                      height={18}
                      className="mb-2"
                    />
                    <Skeleton count={3} height={18} className="mb-2" />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export const TableSkeleton = () => {
  return (
    <div className="">
      <Skeleton count={5} height={25} className="mb-2" />
    </div>
  );
};

export const ApplicationSkeleton = () => {
  return (
    <div style={{ minWidth: "700px" }}>
      <div className="row">
        <div className="col">
          <Skeleton count={7} className="mb-2" />
        </div>
        <div className="col">
          <Skeleton count={7} className="mb-2" />
        </div>
      </div>
      <div className="mt-4 row">
        <div className="col">
          <CardSkeleton />
        </div>
        <div className="col">
          <CardSkeleton />
        </div>
      </div>
    </div>
  );
};

export const ProfileSkeleton = () => {
  return (
    <div className="">
      <div className="row">
        {/* <div className="col-12 col-md-2">
          <Skeleton circle height={150} width={150} />
        </div> */}
        <div className="col-12 col-md-10">
          <Skeleton count={2} height={25} width="50%" className="mb-2" />
          <Skeleton count={3} height={25} className="mb-2" />
        </div>
      </div>
      <div className="mt-5 row">
        <div className="col-md-4 col-12">
          <CardSkeleton />
        </div>
        <div className="col-md-4 col-12">
          <CardSkeleton />
        </div>
        <div className="col-md-4 col-12">
          <CardSkeleton />
        </div>
      </div>
    </div>
  );
};
