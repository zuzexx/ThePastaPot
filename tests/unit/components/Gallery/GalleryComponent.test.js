import { screen, render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import GalleryComponent from "@/components/Gallery/GalleryComponent.vue";

describe("GalleryComponent", () => {
  describe("layout", () => {
    it("has a heading", () => {
      render(GalleryComponent);
      let heading = screen.queryByRole("heading");
      expect(heading).toBeInTheDocument();
    });
    it("has appropriate heading text", () => {
      render(GalleryComponent);
      let heading = screen.queryByText("gallery");
      expect(heading).toBeInTheDocument();
    });
    it("has a separator", () => {
      render(GalleryComponent);
      let separator = screen.queryByRole("separator");
      expect(separator).toBeInTheDocument();
    });
    it("has a list", () => {
      render(GalleryComponent);
      let list = screen.queryByRole("list");
      expect(list).toBeInTheDocument();
    });
    it("has 12 listItems", () => {
      render(GalleryComponent);
      let listItems = screen.queryAllByRole("listitem");
      expect(listItems.length).toBe(12);
    });
    
    describe("images ", () => {
      it("has 12 images", () => {
        render(GalleryComponent);
        let img = screen.queryAllByRole("img");
        expect(img.length).toBe(12);
      });
      it("has appropriate alt text", ()=>{
        render(GalleryComponent);
        let altArray = ["pasta1", "pasta2", "pasta3", "pasta4", "pasta5", "pasta6", "pasta7", "pasta8", "pasta9", "pasta10", "pasta11", "pasta12"]
        for(let i = 0; i<altArray.length;i++){
          const alt=screen.queryByAltText(altArray[i]);
          expect(alt).toBeInTheDocument()
        }
      })
     
    });
    
  });
});
