import { Button } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import styles from "./button-row.module.scss";
import { BuildingCosts } from "../building-costs/building-costs";
import { useState } from "react";

export const CostsButton = () => {

  const [openCosts, setOpenCosts] = useState(false);

  return(
    <>
      <Button variant="contained" onClick={() => setOpenCosts(true)} size="small" endIcon={<ConstructionIcon />} className={styles["button-row__button"]}>
        Building Costs
      </Button>
      <BuildingCosts open={openCosts} onClose={() => setOpenCosts(false)} />
    </>
  );
}

CostsButton.displayName = 'CostsButton';