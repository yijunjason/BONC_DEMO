import {Link} from "umi";

export default function Page404() {
    return (
      <div>
        <span>page in not found</span>
        <Link to={"/"}>go to indexPage</Link>
        <img src={require('../image/936c8f15a7cf117e714fabe3ac0afee6.jpeg')} alt=""/>
      </div>
    )
}
