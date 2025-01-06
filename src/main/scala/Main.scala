import org.scalajs.dom
import org.scalajs.dom.document
import slinky.web.ReactDOM

object Main {
  def main(args: Array[String]): Unit = {
    ReactDOM.render(TextEditor(), document.getElementById("root"))
  }
}
