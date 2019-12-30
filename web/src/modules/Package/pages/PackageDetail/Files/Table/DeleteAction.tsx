import { PackageApi } from "@/features/package";
import styles from "@/modules/Package/pages/PackageDetail/Files/Table/styles.less";
import { Popconfirm } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { DataRow } from "./types";

type Props = Pick<DataRow, "channel" | "package">;

export default ({ channel, package: detail }: Props) => {
  const dispatch = useDispatch();

  return (
    <Popconfirm
      placement="topLeft"
      title="Are you sure you want to delete this package?"
      trigger="click"
      onConfirm={() => dispatch(PackageApi.removePackage(channel, detail))}
    >
      <span className={styles.removeButton}>Remove</span>
    </Popconfirm>
  );
};
