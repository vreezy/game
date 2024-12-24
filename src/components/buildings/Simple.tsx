import React from "react";
import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";
import { BuildingProps } from "./Building";
import { modulo } from "../../utils/modulo";
import { hasEnoughResources } from "../../utils/hasEnoughResources";
import { Box } from "@mui/material";
import { TILE_SIZE } from "../const/graph";
import { INode } from "../../interfaces/INode";
import { getNodeKey } from "../../utils/getNodeKey";


export function Simple(props: Readonly<BuildingProps>): React.ReactElement {
  const [tick, resources, increaseResources, decreaseResources, units, nodes, updateUnit, removeUnit] = useBoundStore(
    useShallow((state) => [
      state.tick,
      state.getResources,
      state.increaseResources,
      state.decreaseResources,
      state.units,
      state.nodes,
      state.updateUnit,
      state.removeUnit
    ])
  );

  const [lockTick, setLockTick] = React.useState(tick);

  function inside_circle(node:INode, nodeToCheck: INode, radius: number) {
    const dx = node[1] - nodeToCheck[1],
          dy = node[0] - nodeToCheck[0];
    const distance_squared = dx*dx + dy*dy;
    return distance_squared <= radius*radius;
}

  // function boundingBox() {
  //   const radius = (props.building?.weapons?.range ?? 1)
  //   const top    = Math.ceil(props.node[0] - radius)
  //   const bottom = Math.floor(props.node[0] +  radius)
  //   const left   = Math.ceil(props.node[1] -  radius)
  //   const right  = Math.floor(props.node[1] + radius)

  //   for (let y = top; y <= bottom; y++) {
  //       for (let x = left; x <= right; x++) {
  //           if (inside_circle(props.node, [x, y], radius)) {
  //               // draw tile (x, y)
  //           }
  //       }
  //   }
  // }

  React.useEffect(() => {
    function lease() {
      if (
        tick > props.building.createdTick &&
        props.building?.lease &&
        modulo(tick, props.building.lease.moduloTick) === 0
      ) {
        if (hasEnoughResources(resources(), props.building.lease.resources)) {
          decreaseResources(props.building.lease.resources);
        } else {
          // TODO: decrees happiness?
        }
      }
    }

    function income() {
      if (
        tick > props.building.createdTick &&
        props.building?.income &&
        modulo(tick, props.building.income.moduloTick) === 0
      ) {
        increaseResources(props.building.income.resources);
      }
    }

    function weapons() {
      if (
        tick > props.building.createdTick &&
        props.building?.weapons
        
      ) {
        units.forEach((unit) => {
          const node = nodes.find((n) => getNodeKey(n) === unit.nodeKey);
          if(node) {
            if(inside_circle(props.node, node, props.building?.weapons?.range ?? 1)) {
              console.log("Unit in range", unit.key);
              const newLive = unit.live - (props.building?.weapons?.damage ?? 1);
              if(newLive > 0) {
                updateUnit({
                  ...unit,
                  live: newLive
                })
              }
              else{
                removeUnit(unit.key);
              }
              
            }
          }
          
        });
      }
    }

    if (lockTick < tick) {
      setLockTick(tick);
      if (props.building?.lease) {
        lease();
      }
      if (props.building?.income) {
        income();
      }
      if (props.building?.weapons) {
        weapons()
      }
    }
  }, [props, lockTick, tick, resources, increaseResources, decreaseResources, units, nodes, updateUnit, removeUnit]);

  // function _handleSell() {
  //   setBuilding(props.building.key, "nothing", tick);
  // }

  const dotSize = TILE_SIZE * (props.building?.weapons?.range ?? 1);

  const dot = {
    height: `${dotSize}px`,
    width: `${dotSize}px`,
    backgroundColor: "#bbb",
    marginTop: `-${TILE_SIZE / 2}px`,
    marginLeft: `-${TILE_SIZE / 2}px`,
    borderRadius: "50%",
    position: "absolute",
    opacity: "0.2",
  };

  return (
    <>
      {props.building?.weapons && <Box sx={dot}></Box>}
      <Box>{props.building.displayName}</Box>
    </>
  );
}
