import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const DummyBreadCrumbs = () => {
  return (
    <Breadcrumb fontWeight="medium" spacing="3">
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Docs</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default DummyBreadCrumbs;
