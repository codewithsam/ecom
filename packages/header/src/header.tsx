import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/ui/avatar";
import CartButton from "./cart-button";
import SearchCommand from "./search-command";

const Header = () => {
  return (
    <>
      <div className="ui-fixed ui-top-0 ui-left-0 ui-right-0 ui-flex ui-flex-row">
        <div className="ui-flex ui-flex-row" style={{ flexGrow: "2" }}>
          <div className="ui-mx-[10px] brand">
            <Avatar>
              <AvatarImage src="https://avatar.iran.liara.run/username?username=ECOM&bold=false&length=2" alt="ECOM" />
              <AvatarFallback>EC</AvatarFallback>
            </Avatar>
          </div>
          <SearchCommand />
        </div>
        <div className="ui-flex ui-flex-row">
          <CartButton />
        </div>
      </div>
    </>
  );
};

export default Header;
