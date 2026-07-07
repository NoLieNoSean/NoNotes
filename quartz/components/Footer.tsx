import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"
import { gitHash, gitBranch, gitCommit } from "../util/buildInfo"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear() % 100
    let links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="13" viewBox="0 0 1300 13" preserveAspectRatio="none" stroke="var(--lightgray)" stroke-width="1" aria-hidden="true" focusable="false">
          <line x1="0" x2="1300" y1="0.5" y2="0.5"></line>
          <line x1="0" x2="1300" y1="4.5" y2="4.5"></line>
          <line x1="0" x2="1300" y1="8.5" y2="8.5"></line>
          <line x1="0" x2="1300" y1="12.5" y2="12.5"></line>
        </svg>


        <div class="wrapper">
          <div class="footer-text">
            <ul>
              {Object.entries(links).map(([text, link]) => (
                <li>
                  <a href={link}>{text}</a>
                </li>
              ))}
            </ul>
            {i18n(cfg.locale).components.footer.createdWith}{" "}
            <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a>
            <div class="build-info">
               {gitBranch}@{gitHash} — {gitCommit}
            </div>

          </div>
          {/* <div class="license-notice">
            <div>
              <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>
            </div>
          </div> */}
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
