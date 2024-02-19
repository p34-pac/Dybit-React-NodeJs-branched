/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import './DropMenu.css'

function DropMenu({ children, defaultText, options, selectedBg, ariaSelect, optionsDrop, colorOpt, colorSelect, optionItem }) {
  function dropDown(e) {
    // drop menu
    let tempEle;
    let child;
    if (e.target.hasAttribute("data-dropMenu")) {
      tempEle = e.target;
      child = findChild(
        tempEle.parentElement.children,
        tempEle.getAttribute("data-dropMenu")
      );

      tempEle.parentElement.classList.toggle("dropped");
      child.classList.toggle("closed");
    } else if (e.target.parentElement.hasAttribute("data-dropMenu")) {
      tempEle = e.target.parentElement;
      child = findChild(
        tempEle.parentElement.children,
        tempEle.getAttribute("data-dropMenu")
      );

      tempEle.parentElement.classList.toggle("dropped");
      child.classList.toggle("closed");
    } else if (
      e.target.parentElement.parentElement.hasAttribute("data-dropMenu")
    ) {
      tempEle = e.target.parentElement.parentElement;
      child = findChild(
        tempEle.parentElement.children,
        tempEle.getAttribute("data-dropMenu")
      );

      tempEle.parentElement.classList.toggle("dropped");
      child.classList.toggle("closed");
    }
  }
  function findChild(fromObject, childClass) {
    for (const key in fromObject) {
      if (Object.hasOwnProperty.call(fromObject, key)) {
        const child = fromObject[key];

        if (child.classList.contains(childClass)) {
          return child;
        } else {
          // Add a return statement for the recursive call
          const foundChild = findChild(child.children, childClass);
          if (foundChild) {
            return foundChild;
          }
        }
      }
    }
  }
  function selectOption(e){
    let tempEle;
    let prev;
    if (e.target.hasAttribute('data-value')) {
        tempEle = e.target
        for (const key in tempEle.parentElement.children) {
            if (Object.hasOwnProperty.call(tempEle.parentElement.children, key)) {
                const theLiz = tempEle.parentElement.children[key];
                if (theLiz.hasAttribute("aria-selected")) {
                    theLiz.removeAttribute("aria-selected")
                    theLiz.style.backgroundColor = optionItem
                }
            }
        }

        tempEle.setAttribute("aria-selected", "true")
        tempEle.style.backgroundColor = ariaSelect
        tempEle.style.color = colorOpt
        // console.log(tempEle.parentElement.parentElement.parentElement.classList.toggle('dropped'))
        prev = findChild(tempEle.parentElement.parentElement.parentElement.children, 'dropList')
        prev.classList.add('closed')
        let valueHolder = findChild(e.target.parentElement.parentElement.parentElement.children, 'text')

        valueHolder.innerText = ''
        let spl = tempEle.getAttribute('data-value').split('-').forEach(str => {
            valueHolder.innerText += " " + str
        });

    }
  }
  return (
    <menu className="dropMenu">
      <div style={{
        backgroundColor: selectedBg,
        color: colorSelect,
        border: `2px solid ${colorSelect}`
        }} className="selected" data-dropmenu="dropList" onClick={(e) => dropDown(e)}>
        <b className="text">{defaultText}</b>
        <i className="ICN-arr">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z"
              fill={colorSelect}
            ></path>
          </svg>
        </i>
      </div>
      <div className="dropList closed">
      {children}
        <ul style={{backgroundColor: optionsDrop, color: colorOpt}}>
          {options.map((option, index) => {
            return (
              <li style={{backgroundColor: optionItem}} data-value={option} key={index} onClick={(e) => selectOption(e)}>
                {option}
              </li>
            )
          })}
        </ul>
      </div>
    </menu>
  );
}

export default DropMenu;
