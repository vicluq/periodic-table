import { colors } from "../services/data";

export default function colorByGroupBlock(groupBlock) {
    const { byGroupType } = colors;
    return byGroupType[groupBlock];
}
