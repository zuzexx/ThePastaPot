import { screen, render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import NavComponent from "@/components/Navigation/NavComponent.vue";

describe("NavComponnet", () => {
  describe("layout", () => {
    it("has a heading", () => {
      render(NavComponent);
      let heading = screen.queryByRole("heading");
      expect(heading).toBeInTheDocument();
    });
    it("has a heading that says 'The Pasta Pot'", () => {
      render(NavComponent);
      let heading = screen.queryByText("The Pasta Pot");
      expect(heading).toBeInTheDocument();
    });
    it("has a list", () => {
      render(NavComponent);
      let list = screen.queryByRole("list");
      expect(list).toBeInTheDocument();
    });
    it("has five list items", () => {
      render(NavComponent);
      let listItems = screen.queryAllByRole("listitem");
      expect(listItems.length).toBe(5);
    });
    it("has 5 links", () => {
      render(NavComponent);
      let links = screen.queryAllByRole("link");
      expect(links.length).toBe(5);
    });
    it("has apropriate list item text", async () => {
      const user = userEvent.setup();
      render(NavComponent);
      let hamburger = screen.queryByRole("img");
      await user.click(hamburger);
      const listArray=["home","about us", "menu", "gallery", "contact"]
      for(let i = 0; i<listArray.length; i++){
        const list = screen.queryAllByText(listArray[i]);
        expect(list.length).toBe(2)
      }
    });
    describe("clicking on links goes to appropriate url", () => {
      it("goes to /#home", async () => {
        const user = userEvent.setup();
        render(NavComponent);
        let home = screen.queryByText("home");
        await user.click(home);
        expect(window.location.href).toContain("/#home");
      });
      it("goes to '/#about-us'", async () => {
        const user = userEvent.setup();
        render(NavComponent);
        let aboutUs = screen.queryByText("about us");
        await user.click(aboutUs);
        expect(window.location.href).toContain("/#about-us");
      });
      it("goes to '/#menu'", async () => {
        const user = userEvent.setup();
        render(NavComponent);
        let menu = screen.queryByText("menu");
        await user.click(menu);
        expect(window.location.href).toContain("/#menu");
      });
      it("goes to '/#gallery'", async () => {
        const user = userEvent.setup();
        render(NavComponent);
        let gallery = screen.queryByText("gallery");
        await user.click(gallery);
        expect(window.location.href).toContain("/#gallery");
      });
      it("goes to '/#contact'", async () => {
        const user = userEvent.setup();
        render(NavComponent);
        let contact = screen.queryByText("contact");
        await user.click(contact);
        expect(window.location.href).toContain("/#contact");
      });
    });
  });
});
