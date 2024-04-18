# Folder Purpose
This dir stores file's not directly used by the project, but still important nonetheless. 
Information on the files:
- original CSVs
    - IATA
        - This is open source data I got from [github](https://github.com/mborsetti/airportsdata).
        - It stores over 28,000 entries for nearly every operational airport and landing strip in the world.
    - ISO
        - Open source data from [github](https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes/blob/master/all/all.csv)
        - Stores ISO values with country codes
- Altered CSVs
    - This data is modified by a python script.
    - The data from this file is implemented into a database.
- Python script
    - This is the script used to create the database csv using modifications
