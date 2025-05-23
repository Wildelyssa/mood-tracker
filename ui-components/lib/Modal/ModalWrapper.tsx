"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { useRef } from "react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconClose } from "../Icons/Index";
import { cn } from "@/lib/utils";
import IconButton from "../Buttons/IconButton";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  hideCloseButton?: boolean;
  initialFocusRef?: React.MutableRefObject<any>;
  closeButtonClassName?: string;
  wrapperClassName?: string;
}

const ModalWrapper = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      hideCloseButton,
      className,
      isOpen,
      onClose,
      initialFocusRef,
      closeButtonClassName,
      wrapperClassName,
    },
    ref
  ) => {
    const closeButtonRef = useRef(null);

    return (
      <AnimatePresence>
        {isOpen && (
          <Dialog
            static
            as={motion.div}
            open={isOpen}
            onClose={() => {
              if (document.body.classList.contains("lock-window")) {
                return;
              }
              onClose();
            }}
            initialFocus={initialFocusRef ?? closeButtonRef}
            className={cn(
              "relative z-30 flex flex-col overflow-y-auto",
              wrapperClassName
            )}
            ref={ref}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-dark-blue/50"
            />

            {/* Full-screen scrollable container */}
            <div className="hide-scrollbar fixed inset-0 w-screen overflow-y-auto">
              {/* Container to center the panel */}
              <div className="flex min-h-full items-center justify-center p-4">
                <DialogPanel
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  // To Do=> Create variables for rgba colours
                  className={cn(
                    "bg-primary-4 relative rounded-[16px] drop-shadow-[0_0_50px_rgba(46 46 46 0.75)]",
                    className
                  )}
                >
                  {children}

                  {!hideCloseButton && (
                    <IconButton
                      onClick={onClose}
                      variant="minimal"
                      className={cn(
                        "absolute right-4 top-4 focus-visible:outline-none",
                        closeButtonClassName
                      )}
                      ref={closeButtonRef}
                    >
                      <IconClose />
                    </IconButton>
                  )}
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    );
  }
);

export default ModalWrapper;
