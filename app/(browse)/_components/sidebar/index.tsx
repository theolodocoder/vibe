import Recommended from "./recommended";
import Toggle from "./toggle";
import Wrapper from "./wrapper";
import { getRecommended } from "@/lib/recommended-service";

export default async function Sidebar() {
  const users = await getRecommended();
  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommended data={users} />
      </div>
    </Wrapper>
  );
}
