import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    clickTabId(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ' '
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
