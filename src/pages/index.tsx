import DummyStories from "@/dummyStories";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3">
      {/* <Button
        variant={"solid"}
        rightIcon={<ArrowForwardIcon />}
        leftIcon={<ArrowBackIcon />}
        colorScheme="scheme.brand.primary"
        onClick={toggleColorMode}
        size={"extra"}
      >
        Primary
      </Button> */}
      <DummyStories />
    </main>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
