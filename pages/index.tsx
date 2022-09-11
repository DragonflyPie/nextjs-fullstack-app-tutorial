import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import Search from "../components/utility/search/Search";
import { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();

  return (
    <section className="flex flex-col gap-y-5 items-center mt-12 sm:mt-36">
      <Image
        src="/google.png"
        width={272}
        height={92}
        alt={"Google Logo"}
        priority
      />
      <Search />
      <p>
        Google offered in:{" "}
        <Link href="/" locale={locale === "en" ? "fr" : "en"}>
          <a className="underline text-blue-600"> Français</a>
        </Link>
      </p>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
