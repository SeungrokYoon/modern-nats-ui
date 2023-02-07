import { setUserName } from "@slice/userSlice";
import { useAppSelector, useAppDispatch } from "src/hooks/reduxHook";

function HomePage() {
  const userName = useAppSelector((state) => state.user.name);
  const dispatch = useAppDispatch();

  return (
    <div role="heading" aria-level={1}>
      Welcome to Next.js! {userName}
      <button type="button" onClick={() => dispatch(setUserName("Ivan"))}>
        Click
      </button>
    </div>
  );
}

export default HomePage;
