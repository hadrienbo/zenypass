/*
 * Copyright 2018 Stephane M. Catala
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * Limitations under the License.
 */
/** @jsx createElement */
//

import { createElement } from "../create-element";
import Icon from "./icon";
import FlagIcon from "./flag-icon";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";

export interface LangDropdownProps {
  items?: LangDropdownItem[]
  lang?: string
  onSelect: (lang: string) => void
}

export interface LangDropdownItem {
  lang: string
  title: string
  flags: string[]
}

(LangDropdown as any).defaultProps = {
  items: [
    { lang: "en", title: "English", flags: ["gb", "us"] },
    { lang: "fr", title: "Français", flags: ["fr"] }
  ],
  lang: "fr"
};

/**
 * WARNING: unoptimized implementation:
 * - instantiates a number of functions with every render.
 * - also instantiates all menu nodes with every render,
 * regardless of whether the dropdown is open or not.
 */
export default function LangDropdown({
  items,
  lang,
  onSelect
}: LangDropdownProps) {
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret color="outline-info">
        <Icon icon="fa-globe" />
      </DropdownToggle>
      <DropdownMenu>{items.filter(isNotLang(lang)).map(Item)}</DropdownMenu>
    </UncontrolledDropdown>
  );

  function Item({ lang, flags, title }: LangDropdownItem) {
    return (
      <DropdownItem onClick={onClick}>
        {flags.map(flag)}
        {title}
      </DropdownItem>
    );

    function onClick() {
      onSelect(lang);
    }
  }
}

function isNotLang(lang: string) {
  return function(item: LangDropdownItem) {
    return item.lang !== lang;
  };
}

function flag(icon: string) {
  return <FlagIcon icon={icon} />;
}
