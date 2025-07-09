import React, { memo } from "react";
import { motion } from "framer-motion";
import { IconDownload } from "@tabler/icons-react";

const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 5,
    y: 5,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const FileDownload = memo(function FileDownload() {
  return (
    <div className="w-full overflow-visible">
      {/* Ensure the parent container allows overflow */}
      <motion.div
        whileHover="animate"
        className="group/file rounded-lg flex cursor-pointer w-full relative overflow-visible"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full max-w-xl overflow-visible">
            <motion.div
              layoutId="file-download"
              variants={mainVariant}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="relative group-hover/file:shadow-2xl z-40 bg-white dark:bg-neutral-900 flex items-center justify-center h-8 w-8 max-w-[8rem] mx-auto rounded-md shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
            >
              <IconDownload className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
            </motion.div>
            <motion.div
              variants={secondaryVariant}
              className="absolute opacity-0 border border-dashed border-sky-400 inset-0 bottom-3 z-30 bg-transparent flex items-center justify-center h-8 w-full max-w-[8rem] mx-auto rounded-md"
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});
