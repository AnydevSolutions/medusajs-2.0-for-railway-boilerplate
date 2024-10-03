"use client";

import { Popover, Transition } from "@headlessui/react";
import { ArrowRightMini, XMark, BarsThree, CircleDottedLine, ShoppingBag, MagnifyingGlass, User, Tag } from "@medusajs/icons";
import { Region } from "@medusajs/medusa";
import { Text, clx, useToggleState } from "@medusajs/ui";
import { Fragment } from "react";

import LocalizedClientLink from "@modules/common/components/localized-client-link";
import CountrySelect from "../country-select";

const SideMenuItems = {
  "Inicio": {
    href: "/",
    icon: <CircleDottedLine className="w-6 h-6 text-slate-500" />, // Icono de Medusa
  },
  "Tienda en Línea": {
    href: "/store",
    icon: <ShoppingBag className="w-6 h-6 text-slate-500" />, // Icono de Medusa
  },
  "Buscar": {
    href: "/search",
    icon: <MagnifyingGlass className="w-6 h-6 text-slate-500" />, // Icono de Medusa
  },
  "Cuenta": {
    href: "/account",
    icon: <User className="w-6 h-6 text-slate-500" />, // Icono de Medusa
  },
  "Carrito": {
    href: "/cart",
    icon: <Tag className="w-6 h-6 text-slate-500" />, // Icono de Medusa
  },
};

const SideMenu = ({ regions }: { regions: Region[] | null }) => {
  const toggleState = useToggleState();

  return (
    <div className="h-full">
      <div className="flex items-center h-full ">
        <Popover className="h-full flex ">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full ">
                <Popover.Button data-testid="nav-menu-button" className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base ">
                  <BarsThree className="lg:hidden text-black" /> <span className="lg:inline-block hidden">Menu</span>
                </Popover.Button>
              </div>

              {/* Overlay negro con opacidad 10% */}
              {open && (
                <div className="absolute w-screen h-screen inset-0 bg-black opacity-10 z-[99]" aria-hidden="true"></div>
              )}

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
              >
                <Popover.Panel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-5rem)] md:h-[calc(100vh-1.9rem)] z-[99] inset-x-0 text-sm text-ui-fg-on-color m-2 ">
                  <div data-testid="nav-menu-popup" className="flex flex-col h-full bg-white lg:shadow-xl rounded-rounded justify-between p-6 border-r border-slate-200 border shadow-xl">
                    <div className="flex justify-end" id="xmark">
                      <button data-testid="close-menu-button" onClick={close}>
                        <XMark className="text-black" />
                      </button>
                    </div>

                    <ul className="flex flex-col gap-4 items-stretch justify-start text-gray-700 w-full">
                      {Object.entries(SideMenuItems).map(([name, { href, icon }]) => (
                        <li key={name} className="w-full flex items-center">
                          <span className="mr-2">
                            {icon}
                          </span>
                          <LocalizedClientLink
                            href={href}
                            className="text-xl leading-10 w-full border border-transparent border-tra hover:border hover:border-slate-300  p-2 rounded-xl transition-all"
                            onClick={close}
                            data-testid={`${name.toLowerCase()}-link`}
                          >
                            {name}
                          </LocalizedClientLink>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col gap-y-6 mt-6">
                      <div
                        className="flex justify-between text-black"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150 text-black",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="flex justify-between txt-compact-small text-black">
                        © {new Date().getFullYear()} Anydev Store. All rights reserved.
                      </Text>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
};

export default SideMenu;
