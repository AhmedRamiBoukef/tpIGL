import { useRouter } from "next/router";

function index() {
  const router = useRouter();
  return router.push("/app/offers/sent") && null;
}

export default index;
