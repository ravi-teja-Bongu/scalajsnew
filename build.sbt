enablePlugins(ScalaJSPlugin)
ThisBuild / version := "0.1.0-SNAPSHOT"
ThisBuild / scalaVersion := "2.13.12"

lazy val root = project
  .in(file("."))
  .settings(
      name := "Texteditor_react_scala",
      scalaJSUseMainModuleInitializer := true,
      scalacOptions += "-Ymacro-annotations",


      libraryDependencies ++= Seq(
          "org.scala-js" %%% "scalajs-dom" % "2.8.0",
          "org.scalatest" %% "scalatest" % "3.2.17" % Test,
          "me.shadaj" %%% "slinky-core" % "0.7.4",
          "me.shadaj" %%% "slinky-web" % "0.7.4",

      )
  )

mainClass in Compile := Some("Main")


