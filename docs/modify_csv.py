import csv


def remove_columns(row, columns_to_remove):
    """
    Removes specified columns from a row.

    Parameters:
        row (dict): The row represented as a dictionary.
        columns_to_remove (list): List of column names to remove.

    Returns:
        dict: The modified row without the specified columns.
    """
    # Create a new dictionary to store the modified row
    modified_row = {}

    # Iterate over each key-value pair in the original row
    for key, value in row.items():
        # Check if the key is not in the list of columns to remove
        if key not in columns_to_remove:
            # Add the key-value pair to the modified row
            modified_row[key] = value

    # Return the modified row
    return modified_row


def rename_column(row, old_column_name, new_column_name):
    """
    Renames a column in a row.

    Parameters:
        row (dict): The row represented as a dictionary.
        old_column_name (str): The name of the column to be renamed.
        new_column_name (str): The new name for the column.

    Returns:
        dict: The row with the specified column renamed.
    """
    if old_column_name in row:
        row[new_column_name] = row.pop(old_column_name)
    return row


def return_iso_map(iso_file_path):
    iso_map = {}
    with open(iso_file_path, newline='', encoding='utf-8') as iso_file:
        reader = csv.DictReader(iso_file)
        for row in reader:
            alpha_2 = row['alpha-2']
            country = row['name']
            iso_map[alpha_2] = country
    return iso_map


def modify_csv(in_file_path, out_file_path):
    iso_map = return_iso_map('iso.csv')
    columns_to_remove = ['icao', 'elevation', 'lid', 'tz']

    with open(in_file_path, newline='', encoding='utf-8') as infile, \
            open(out_file_path, 'w', newline='', encoding='utf-8') as outfile:

        reader = csv.DictReader(infile)
        fieldnames = [
            field for field in reader.fieldnames if field not in columns_to_remove]
        fieldnames.append('iso')  # Add 'iso' to fieldnames
        writer = csv.DictWriter(
            outfile, fieldnames=fieldnames, quoting=csv.QUOTE_ALL)
        writer.writeheader()

        for row in reader:
            if row['iata']:  # Check if the row has an IATA code
                # Remove specified columns
                row = remove_columns(row, columns_to_remove)
                # Rename 'country' column to 'iso'
                row = rename_column(row, 'country', 'iso')

                # Add the country name
                if row['iso'] == 'XK':
                    row['country'] = 'Kosovo'
                else:
                    row['country'] = iso_map[row['iso']]

                writer.writerow(row)


modify_csv('original_airports.csv', 'modified_airports.csv')
