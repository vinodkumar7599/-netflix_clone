import "./Home.css";
import { Link } from "react-router-dom";
import { color } from "@mui/system";
export function Home() {
  const styles = {color:"white" };
  return (
    <div>
      <div className="topHead-1">
        <img
          className="logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          width="200"
          height="130"
          alt="Netflix" style={styles}
        />
        <div className="topHead-2">
          <select className="select">
            <option> English </option>
            <option> Hindi </option>
            <option> urdu </option>
          </select>
          <Link to={"/login"}>
            <button className="login">Login</button>
          </Link>
          <Link to={"/registration"}>
            
            <button className="registration">Registration</button>
          </Link>
        </div>
      </div>
      <div className="container-flued">
        <img
          id="bg_img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c8c8a0ad-86d6-45f1-b21d-821afa4e5027/121450d3-2d2f-41a9-acd6-b050ca0e0424/IN-en-20220801-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          width="100%"
          height="700px"
          alt=""
        />
        <div className="overlay"></div>
      </div>
      <div id="title">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <br />
      </div>

      <div className="container-flued top-2">
        <div className="container top-2-part">
          <div className="row">
            <div className=" col-md-6 top-2-part-left">
              <h1>Enjoy on your TV.</h1>
              <h3>
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </h3>
            </div>
            <div className=" col-md-6 top-2-part-right">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                width="100%"
                height="400px"
              />
              <img
                id="gif-2"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f6b57563-942a-4010-89a1-39b5ea4e29fe/ddhj1vi-821628b7-6cf7-4939-be63-56316b8c12a5.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y2YjU3NTYzLTk0MmEtNDAxMC04OWExLTM5YjVlYTRlMjlmZVwvZGRoajF2aS04MjE2MjhiNy02Y2Y3LTQ5MzktYmU2My01NjMxNmI4YzEyYTUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MGQPXRQ9awY9-yhLt_oWns79BftmLWrbkuKG7bJ-bmU"
                width="59%"
                height="220px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-flued top-3">
        <div className="container top-3-part">
          <div className="row">
            <div className="col-md-6 top-3-part-left">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                width="100%"
                height="400px"
              />
            </div>
            <div className="col-md-6 top-3-part-right">
              <h1>Download your shows to watch offline.</h1>
              <h3>
                Save your favourites easily and always have something to watch.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container-flued top-4">
        <div className="container top-4-part">
          <div className="row">
            <div className=" col-md-6 top-4-part-left">
              <h1>Look everywhere.</h1>
              <h3>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop and TV without paying extra.
              </h3>
            </div>
            <div className=" col-md-6 top-4-part-right">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                width="100%"
                height="350px"
              />
              <img
                id="gif-4"
                src="https://cdn.vox-cdn.com/thumbor/GL4-VpHndb9piMdYKrkLPiHzkeY=/0x0:1200x659/1200x659/filters:focal(600x330:601x331):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23883848/primenetflix.gif"
                width="43%"
                height="35%"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-flued top-5">
        <div className="container top-5-part">
          <div className="row">
            <div className=" col-md-6 top-5-part-left">
              <img
                src="https://occ-0-4344-3663.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABQbzZ6fDTnhABFS5CyFMAcKQIMYom26BRE4A7Gtrbl4CgIJPem5gh2koltInpLVhl-JoG3yfW_PGiv48pDeAtcyQIfGL6nZ4NfBT.png?r=fcd"
                width="100%"
                height="400px"
              />
            </div>
            <div className="col-md-6 top-5-part-right">
              <h1>Create a profile for kids.</h1>
              <h3>
                Let the kids go on an exciting journey with your favorite
                characters just for them free with your membership.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid form-1">
        <div className="container  ">
          <div className="row form-2">
            <h1 className="col-8 offset-2" id="lhed">
              Frequently Asked Questions
            </h1>
            <div className="col-8 offset-2 asked">what_is_netflix</div>
            <div className="col-8 offset-2 asked">
              How much does Netflix cost?
            </div>
            <div className="col-8 offset-2 asked">Where can I watch?</div>
            <div className="col-8 offset-2 asked">How do I cancel?</div>
            <div className="col-8 offset-2 asked">
              What can I watch on Netflix?
            </div>
            <div className="col-8 offset-2 asked">
              Is Netflix good for kids?
            </div>
            <h3 className="col-8 offset-2 lh">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <p className="col-6 offset-2" id="email">
              Email addres
            </p>
            <div className="col-2 btm">Get Started </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>

      <div className="container-fluid footer-1">
        <div className="container footer-1">
          <div className="row footer">
            <h2 id="low-h">Questions? Call000-800-040-1843 </h2>
            <div className="col-2 offset-md-1 foot">FAQ</div>
            <div className="col-2 offset-md-1 foot">Help Centre</div>
            <div className="col-2 offset-md-1 foot">Account</div>
            <div className="col-2 offset-md-1 foot">Media Centre</div>
            <div className="col-2 offset-md-1 foot">Investor Relations</div>
            <div className="col-2 offset-md-1 foot">Jobs</div>
            <div className="col-2 offset-md-1 foot">Ways to Watch</div>
            <div className="col-2 offset-md-1 foot">Terms of Use</div>
            <div className="col-2 offset-md-1 foot">Privacy</div>
            <div className="col-2 offset-md-1 foot">Cookie Preferences</div>
            <div className="col-2 offset-md-1 foot">Corporate Information</div>
            <div className="col-2 offset-md-1 foot">Contact Us</div>
            <div className="col-2 offset-md-1 foot">Speed Test</div>
            <div className="col-2 offset-md-1 foot">Legal Notices</div>
            <div className="col-2 offset-md-1 foot">Only on Netflix</div>
            <div className="col-2 offset-md-1 foot"></div>
            <br />
            <br />
            <br />
            <br />
            <div className="row">
              <div className="col-2 offset-md-1">
                <select className="elect">
                  <option className="op"> English </option>
                  <option className="op"> Hindi </option>
                  <option className="op"> urdu </option>
                </select>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="row foot">
              <div className="col-2 offset-md-1">Netflix India</div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
