import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react/jsx-runtime";

const PagePath = () => {
  const paths = [
    { name: "الأهداف", url: "/goals" },
    // { name: "الهدف الأول", url: "/goals/1" },
    // { name: "الهدف الثاني", url: "/goals/2" },
    // { name: "الهدف الثالث", url: "/goals/3" },
    // { name: "الهدف الرابع", url: "/goals/4" },
    // { name: "الهدف الخامس", url: "/goals/5" },
    // { name: "الهدف السادس", url: "/goals/6" },
    // { name: "الهدف السابع", url: "/goals/7" },
    // { name: "الهدف الثامن", url: "/goals/8" },
    // { name: "الهدف التاسع", url: "/goals/9" },
    // { name: "الهدف العاشر", url: "/goals/10" },
  ];
  return (
    <Breadcrumb className="text-sm">
      <BreadcrumbList className="!gap-x-1 gap-y-0">
        <BreadcrumbItem>
          <BreadcrumbPage className="text-text-gray-3 font-medium">
            {paths[0].name}
          </BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="rtl:rotate-180" />
        {paths.length > 3 && (
          <>
            <BreadcrumbEllipsis />
            <BreadcrumbSeparator className="rtl:rotate-180" />
          </>
        )}
        {paths
          .slice(1)
          .slice(-2)
          .map((path, index) => (
            <Fragment key={index}>
              <BreadcrumbItem className="font-medium">
                <BreadcrumbLink href={path.url}>{path.name}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="rtl:rotate-180" />
            </Fragment>
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default PagePath;
