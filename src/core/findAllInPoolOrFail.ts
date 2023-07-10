/** return the objects corresponding to the given  ids from the given pool.
 *
 * Throw and error if there's an id for which we can't find a corresponding object. */
export function findAllByIdOrFail<IdType, T extends { id: IdType }>(
    ids: IdType[],
    pool: T[]
): T[] {
    return ids.map((soughtId) => {
        const found = pool.find((poolItem) => poolItem.id === soughtId);
        if (!found) {
            throw new Error(
                `Can't find item with sought id: ${soughtId} - expected in pool but no match.`
            );
        }
        return found;
    });
}
