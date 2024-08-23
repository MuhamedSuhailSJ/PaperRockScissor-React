import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import './index.css'

const RuleCard = () => (
  <div>
    <Popup modal trigger={<button>Rules</button>}>
      {close => (
        <>
          <button onClick={() => close()}>
            <RiCloseLine />
          </button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
            className="ruleimg"
          />
        </>
      )}
    </Popup>
  </div>
)

export default RuleCard
