class MyElement {

}
class DivElement extends MyElement {
  classList : "MyElement"

}
class SpanElement extends MyElement {

}
class CanvasElement extends MyElement {

}

interface MyDocument {
  createElement(tagName: "div") : DivElement;
  createElement(tagName: "span"): SpanElement;
  createElement(tagName : string) : MyElement;

}

class MyBestDocument implements MyDocument {
  createElement(tagName : string) : MyElement {
      switch (tagName) {
        case "div":
          return new DivElement();
        case "span":
          return new SpanElement();
        default:
          console.log("some error");
          return null;
      }
  }
}
